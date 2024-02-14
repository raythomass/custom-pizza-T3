const { User, Order, OrderDetails, Pizza } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            return await User.find({}).populate('savedOrders')
        },
        pizza: async (parent, args, context) => {
            return await Pizza.find({})
        },
        order: async (parent, args, context) => {
            return await Order.find({})
        },
        me: async (parent, args, context) => {
            // if (context.user) {
            //     return await User.findbyId({ _id: context.user._id})
            // }
            // return AuthenticationError

            return await User.findById(args)
        },
        savedOrder: async (parents, args, context) => {
            if (context.user) {
                return await User.findById(args.id).populate('savedOrders')
            }
        },
        pizza: async (parent, args, context) => {
            console.log('here')
            return await Pizza.find()
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            
            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);
            
            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        addUser: async (parent, args, context) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return User.findByIdAndUpdate(context.user.id, args, {
                  new: true,
                });
              }
        
              throw AuthenticationError;
        },
        addPizza: async (parent, { pizzas }, context) => {
            const order = new Order({ pizzas })
            console.log(pizza)

            await User.findByIdAndUpdate(context.user.id, {
                $push: { savedOrders: order },
              });

            return order
        },
    }

};

// TODO
// order create and then update
// rfind ordr by id and then add to set

module.exports = resolvers;