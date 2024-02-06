const { User, Order, OrderDetails } = require('../models');

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

};

module.exports = resolvers;