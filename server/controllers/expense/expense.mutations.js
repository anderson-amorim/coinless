export const expenseMutations = {
    createExpense: (parent, args, { models }) =>
        models.Expense.create(args),

    updateExpense: (parent, { id, value }, { models }) =>
        models.Expense.update({ value }, { where: { id } }),

    deleteExpense: (parent, args, { models }) =>
        models.Expense.destroy({ where: args })
}