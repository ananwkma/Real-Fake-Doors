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
      img: "clear-stain-alder.jpg",
      size: '48" x 96"',
    },
    2: {
      name: "mahogany",
      price: 1049.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 4.5,
      numRatings: 1023,
      img: "clear-stain-alder.jpg",
      size: '48" x 96"',
    },
    3: {
      name: "steel",
      price: 1099.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 3.8,
      numRatings: 2341,
      img: "clear-stain-alder.jpg",
      size: '48" x 96"',
    },
    4: {
      name: "mahogany2",
      price: 1299.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 4.2,
      numRatings: 234,
      img: "clear-stain-alder.jpg",
      size: '48" x 96"',
    },
    5: {
      name: "steel2",
      price: 1249.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 4.4,
      numRatings: 6234,
      img: "clear-stain-alder.jpg",
      size: '48" x 96"',
    },
    6: {
      name: "fiberglass",
      price: 1199.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 5,
      numRatings: 12,
      img: "clear-stain-alder.jpg",
      size: '48" x 96"',
    },
    7: {
      name: "fiberglass2",
      price: 2099.99,
      colors: ["clear", "provincial", "red chestnut"],
      description: "Won't open",
      rating: 3.8,
      numRatings: 234,
      img: "clear-stain-alder.jpg",
      size: '48" x 96"',
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
