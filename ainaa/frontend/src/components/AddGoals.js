import React from 'react';

export default function AddGoals(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">

                </aside>
                <section className="col-md-9">
                    <div className='card' >
                        <h5 className="card-header">Add your goals</h5>
                        <div className="card-body">
                            
                                <div className="mb-3">
                                    <label for="title" className="col-sm-2 col-form-label">Title</label>
                                    <div class="col-sm-10">
                                    <input type="text" className="form-control"  placeholder="Enter title" required/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="Descripition" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control"  placeholder="Enter description" required/>
                                    </div>
                                </div>
                                {/* <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Default radio
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Default checked radio
                                    </label>
                                </div> */}
                                
                                    <div className="row">
                                    <legend className="col-form-label pt-0">Type</legend>
                                    <div class="col-sm-10">
                                        <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Daily Goal"  value="option1"/>
                                        <label className="form-check-label" for="gridRadios1">
                                            Daily Goal
                                        </label>
                                        </div>
                                        <div class="form-check">
                                        <input class="form-check-input" type="radio" name="Monthly Goal"  value="option2"/>
                                        <label class="form-check-label" for="gridRadios2">
                                            Monthly Goal
                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Yearly goal"  value="option3"/>
                                        <label className="form-check-label" for="gridRadios3">
                                            Yearly Goal
                                        </label>
                                        </div>
                                    </div>
                                    </div>
                              
                                <div className="mb-3">
                                    <div className="col-sm-2">Complete</div>
                                    <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label className="form-check-label" for="gridCheck1">
                                            Yes
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            
                        </div>
                    </div>    
                </section>
            </div>
        </div>
    )
}