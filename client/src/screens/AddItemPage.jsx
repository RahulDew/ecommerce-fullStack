import React, { useState } from "react";
import Navbar from "../components/Navbar";
import preview from "../assets/preview.png";
import Dropzone from "react-dropzone";

const AddItemPage = () => {
  const [productImage, setProductImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    productCategory: null,
    productName: null,
    productDesc: null,
    productPrice: null,
    productStock: null,
  });

  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  console.log(productDetails);

  return (
    <>
      {/* <Navbar /> */}
      <p className="text-2xl font-bold text-center my-5">Add New Product</p>
      <section className="flex flex-col gap-10 my-10">
        <div className="flex flex-col md:flex-row justify-around items-center  mx-10 xl:mx-20 ">
          <div className=" w-full flex flex-col basis-5/6 md:basis-3/6  justify-start items-center">
            {/* <h3 className="font-semibold text-2xl my-5">Add Details</h3> */}
            <div className="w-full flex flex-col gap-7 px-10">
              <div className="flex flex-col gap-2">
                <label className="text-lg">Product Category</label>
                <input
                  type="text"
                  name="productCategory"
                  placeholder="Ex.: Tech"
                  className="focus:outline-none p-3 text-lg bg-gray-200 rounded-lg"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  placeholder="Ex.: AirPods Max"
                  className="focus:outline-none p-3 text-lg bg-gray-200 rounded-lg"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg">Product Description</label>
                <textarea
                  type="text"
                  name="productDesc"
                  placeholder="Ex.: A perfect balance of high-fidelity audio..."
                  className="focus:outline-none p-3 text-lg bg-gray-200 rounded-lg"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg">Product Price</label>
                <input
                  type="number"
                  name="productPrice"
                  placeholder="Ex.: 20000 Rs."
                  className="focus:outline-none p-3 text-lg bg-gray-200 rounded-lg"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className=" w-full flex flex-col basis-3/6 justify-start items-center">
            {/* <h3 className="font-semibold text-2xl my-5">Add Image Here</h3> */}

            <div className="w-full flex flex-col gap-7 px-10">
              <div className="flex flex-col gap-2">
                <label className="text-lg">Available Stocks</label>
                <input
                  type="number"
                  name="productStock"
                  placeholder="Ex.: 32"
                  className="focus:outline-none p-3 text-lg bg-gray-200 rounded-lg"
                  maxLength={10}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg">Upload Product Image</label>
                <div className="relative bg-gray-200 h-80 rounded-lg flex justify-center items-center">
                  <Dropzone
                    acceptedFiles=".jpg, .jpeg, .png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setProductImage(acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div
                        {...getRootProps()}
                        className="border-2 border-dashed border-blue-500 m-5 w-full h-[87%] rounded-lg"
                      >
                        <input {...getInputProps()} />
                        {productImage ? (
                          <p>Product Image Added</p>
                        ) : (
                          <div className="p-5 relative h-full flex flex-col justify-center items-center">
                            <p>Add or Drop Picture here...</p>
                            <img
                              src={preview}
                              alt=""
                              className="h-44 w-44 opacity-40"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </Dropzone>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="text-center m-auto bg-slate-300 p-3 rounded-lg hover:bg-slate-800 hover:text-white transition ease-in-out duration-300">
          Add Product
        </button>
      </section>
    </>
  );
};

export default AddItemPage;
