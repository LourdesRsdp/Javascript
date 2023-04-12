export const mapMovementsFromApiToViewModel = movements => {
  console.log(movements);
    return movements.map(movement => mapMovementFromApiToViewModel(movement));
  };
  
  const mapMovementFromApiToViewModel = movement => {
    return {
      id: movement.id,
      description: movement.description,
      accountId: movement.accountId,
      amount: `${movement.amount} €`,
      balance: `${movement.balance} €`,
      transaction: new Date(movement.transaction).toLocaleDateString(),
      realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    };
  };