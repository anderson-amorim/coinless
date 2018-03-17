export const expenseQueries = {
    findAllExpenses: (parent, args, { models }) =>
        models.Expense.findAll(),

    findManyExpensesByDate: (parent, { date }, { models }) =>
        models.Expense.findAll({ where: { date } }),

    findOneExpense: (parent, { id }, { models }) =>
        models.Expense.findOne({ where: { id } }),

    totalExpenses: (parent, args, { models }) =>
        models.Expense.sum('value')
}