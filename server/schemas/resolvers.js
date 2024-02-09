const { User, Order, OrderDetails, Pizza } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            return await User.findOne({}).populate('savedOrders').populate({
                path: 'savedOrders',
                populate: 'savedOrderDetails'
            })
        },
        order: async (parent, args, context) => {
            return await Order.findOne({}).populate('savedOrderDetails')
        },
        details: async (parents, args, context) => {
            return await OrderDetails.findOne({})
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id})
            }
            return AuthenticationError
        },
        savedOrder: async (parents, args, context) => {
            if (context.user) {
                return await User.findById(args.id).populate('savedOrders').populate({
                    path: 'savedOrders',
                    populate: 'savedOrderDetails'
                })
            }
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            
            console.log('Did I make it here?')
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
        
              throw AuthenticationError;s
        
        },
        addOrder: async (parent, {savedOrderDetails}, context) => {
            if (context.user) {
                const order = new Order({savedOrderDetails});
        
                await User.findByIdAndUpdate(context.user.id, {
                  $push: { savedOrders: order },
                });
              }
        
              throw AuthenticationError;
        },
        addPizza: async (parent, { name, description }, context) => {
            if(context.user){
                const pizza = new Pizza({ name, description })

                return OrderDetails.findByIdAndUpdate( context.user.id, {
                    $push: { pizza: pizza}
                })
            }
        }
    }

};

module.exports = resolvers;