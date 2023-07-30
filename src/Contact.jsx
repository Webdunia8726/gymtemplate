import React from 'react'

const Contact = () => {
  return (
    <>
    
    <div className="container_color ">
        <div className="row text-light ">
            <div className="col mt-5 mb-5">
                <h1 className='text-center'>SUBSCRIBE</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet dignissimos nihil ratione corporis magni id nemo asperiores. Saepe veritatis a omnis similique ab molestiae deserunt corporis optio illum ullam.</p>

               
            </div>
        </div>
        
    </div>

    
   <div className="container_color">
    
    <form class="form_mar  row g-3 ms-5 ps-5">
  <div class="  col-auto   ">
    <label for="staticEmail2" class="visually-hidden text-light ">Email</label>
    <input type="text" readonly class="form-control-plaintext " id="staticEmail2" value="email@example.com"/>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">SUBSCRIBE</button>
  </div>
</form>
</div>

    </>
  )
}

export default Contact;
