export default `
    type Expense {
        id: ID!
        value: Float!
        createdAt: String!
        updatedAt: String! 
    }

    type Query {
        findAllExpenses(createdAt: String): [Expense!]!
        findOneExpense(id: Int!): Expense
        totalExpenses: Float!
    }

    type Mutation {
        createExpense(value: Float!): Expense
        updateExpense(id: Int!, value: Float!): Int!
        deleteExpense(id: Int!): Int!
    }
`;