import React from 'react'

const EditProduct = () => {
  return (
    <div className='row justify-content-center'>
        
    <div className='col-md-8'>
        <div className='card'>
            <div className='card-body'>
                <h2>Edit product</h2>

                <form>
                    <div className='form-group'>
                        <label>Product Name</label>
                        <input name="name" type="text" className='form-control' placeholder='Product Name'/>
                        </div>
                    
                        <div className='form-group'>
                        <label>Product Price</label>
                        <input name="price" type="text" className='form-control' placeholder='Product Name'/>
                        </div>


                        <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block '>
                            Save changes
                        </button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default EditProduct