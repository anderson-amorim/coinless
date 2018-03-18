export const expenseQueries = {
    findAllExpenses: (parent, { createdAt }, { models }) => {
        if (!createdAt) {
            return models.Expense.findAll();
        }
        const startDate = new Date(createdAt);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(createdAt);
        endDate.setHours(23, 59, 59, 999);
        return models.Expense.findAll({
            where: {
                createdAt: {
                    $between: [startDate, endDate]
                }
            }
        });
    },

    findOneExpense: (parent, { id }, { models }) =>
        models.Expense.findOne({ where: { id } }),

    totalExpenses: (parent, args, { models }) =>
        models.Expense.sum('value')
}