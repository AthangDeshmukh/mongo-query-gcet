db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "employeeOrders"
    }
  },
  {
    $addFields: {
      totalOrderValue: { $sum: "$employeeOrders.orderValue" }
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      email: 1,
      totalOrderValue: 1
    }
  }
]);
