export default (sequelize, DataTypes) => {
    const Expense = sequelize.define('Expense', {
        value: DataTypes.DOUBLE
    });

    return Expense;
};
