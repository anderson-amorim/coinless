export const expenseMutations = {
    createExpense: (parent, args, { models }) =>
        models.Expense.create(args),
    updateExpense: (parent, { id, newValue }, { models }) =>
        models.Expense.update({ value: newValue }, { where: { id } }),
    deleteExpense: (parent, args, { models }) =>
        models.Expense.destroy({ where: args })
}