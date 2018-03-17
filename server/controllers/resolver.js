import { expenseQueries } from './expense/expense.queries';
import { expenseMutations } from './expense/expense.mutations';

export default {
    Query: {
        ...expenseQueries,
    },
    Mutation: {
        ...expenseMutations
    }
}