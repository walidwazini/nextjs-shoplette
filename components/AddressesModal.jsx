import React from "react";

const AddressesModal = ({ id, addresses, onChange, htmlFor, children }) => {
  return (
    <>
      <input type='checkbox' id='addresses-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='addresses-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <div className=' flex text-black flex-col gap-1 '>
            {addresses?.map((address) => (
              <div key={address?._key} className={`bg-[#6ca5c7] m-1 p-2 flex `}>
                <div className='basis-1/5 flex justify-center items-center '>
                  <input
                    value={address._key}
                    name='address'
                    onChange={onChange}
                    // onClick={addressChangeHandler}
                    type={"radio"}
                  />
                </div>
                <label className='basis-4/5 '>
                  <div>
                    {address.street} , {address.state}{" "}
                  </div>
                  <div>{address.postal}</div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressesModal;
