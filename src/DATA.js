const data = {
  featured: {
    0: 1
  },
  doors: {
    1: {
      name: "alder",
      price: 1499.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 4.5,
      numRatings: 6072,
    },
    2: {
      name: "mahogany",
      price: 1049.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 4.5,
      numRatings: 1023,
    },
    3: {
      name: "steel",
      price: 1099.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 4,
      numRatings: 2341,
    },
    4: {
      name: "mahogany2",
      price: 1299.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 4.5,
      numRatings: 234,
    },
    5: {
      name: "steel2",
      price: 1249.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 4.5,
      numRatings: 6234,
    },
    6: {
      name: "fiberglass",
      price: 1199.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 5,
      numRatings: 1232,
    },
    7: {
      name: "fiberglass2",
      price: 2099.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 4.5,
      numRatings: 234,
    },
  } 
}


export const getDoorsData = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(data);
    });
  });
};
