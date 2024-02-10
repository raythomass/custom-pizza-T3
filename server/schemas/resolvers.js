const { User, Order, OrderDetails, Pizza } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            return await User.find({}).populate('savedOrders')
        },
        order: async (parent, args, context) => {
            return await Order.find({}).populate('savedOrderDetails')
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id})
            }
            return AuthenticationError
        },
        savedOrder: async (parents, args, context) => {
            if (context.user) {
                return await User.findById(args.id).populate('savedOrders')
            }
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
        addPizza: async (parent, { name, description }, context) => {
            const pizza = new Pizza({ name, description })

            return await Order.create({
                $push: {pizza: pizza}
            })
        }
    }

};

module.exports = resolvers;