import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: null,
    name: '',
    brand: '',
    type: '',
    price: '',
    description: '',
    rating: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    formData.append('image', product.image);
    formData.append('name', product.name);
    formData.append('brand', product.brand);
    formData.append('type', product.type);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('rating', product.rating);

    try {
      // Send formData to backend API endpoint
      const response = await fetch('/api/products/add', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Product added successfully, handle the response if needed
        console.log('Product added successfully');
      } else {
        // Handle errors if the request fails
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }

    // Reset form after submission
    setProduct({
      image: null,
      name: '',
      brand: '',
      type: '',
      price: '',
      description: '',
      rating: '',
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 bg-green-100 p-3">Add Product</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Brand</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Type</label>
          <input
            type="text"
            name="type"
            value={product.type}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Rating</label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
