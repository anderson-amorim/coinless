export default `
    type Expense {
        id: Int!
        value: Float!
        createdAt: String!
        updatedAt: String! 
    }

    type Query {
        findAllExpenses: [Expense!]!
        findManyExpensesByDate(date: String!): [Expense!]!
        findOneExpense(id: Int!): Expense
        totalExpenses: Float!
    }

    type Mutation {
        createExpense(value: Float!): Expense
        updateExpense(id: Int!, value: Float!): Expense
        deleteExpense(id: Int!): Int!
    }
`;