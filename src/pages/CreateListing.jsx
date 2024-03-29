import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
     <h1 className='text-3xl font-semibold text-center my-7'>Create Listing</h1> 
     <form className='flex flex-col sm:flex-row gap-4'>
       <div className='flex flex-col gap-4 flex-1'>
          <input type="text"  placeholder='Name' required id='name' minLength='10' maxLength='62' className='border p-3 rounded-lg'/>
          <textarea type="text"  placeholder='Description' id='description'className='border p-3 rounded-lg'/>
          <input type="text"  placeholder='Address' required id='address'  className='border p-3 rounded-lg'/>
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type='checkbox' id='sale' className='w-5'/>
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type='checkbox' id='rent' className='w-5'/>
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type='checkbox' id='pasking_spot' className='w-5'/>
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input type='checkbox' id='furnished' className='w-5'/>
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type='checkbox' id='offer' className='w-5'/>
              <span>Offer</span>
            </div>
          </div>
          <div className='flex flex-wrap gap-6'>
            <div className='flex items-center gap-2'>
              <input type='number' id='bedrooms' min='1' max='10' required
              className='p-3 border border-gray-300 rounded-lg'/>
              <span>Beds</span>
            </div>
            <div className='flex items-center gap-2'>
              <input type='number' id='barthroom' min='1' max='10' required
              className='p-3 border border-gray-300 rounded-lg'/>
              <span>Baths</span>
            </div>
            <div className='flex items-center gap-2'>
              <input type='number' id='regularPrice' min='1' max='10' required
              className='p-3 border border-gray-300 rounded-lg'/>
              <div className='flex flex-col items-center'>
                <p>Regular Price</p>
                <span className='text-xs'>($ / month)</span>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <input type='number' id='discountedPrice' min='1' max='10' required
              className='p-3 border border-gray-300 rounded-lg'/>
              <div className='flex flex-col items-center'>
                <p>Discounted Price</p>
                <span className='text-xs'>($ / month)</span>
              </div>
            </div>
          </div>
       </div>

       <div className="flex flex-col flex-1">
        <p className='font-semibold'>Images:
        <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
        </p>
        <div className='flex gap-4'>
          <input type="file" id='images' accept='image/*' multiple className='p-3 border border-gray-300 rounded w-full'/>
          <button className='p-3 text-green-700 border-green-700 rounded uppercase hover:shadow-lg disabled: opacity-80'>Upload</button>
        </div>
         <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disable: opacity-80'> create listing</button>
       </div>
     </form>
    </main>
  )
}
