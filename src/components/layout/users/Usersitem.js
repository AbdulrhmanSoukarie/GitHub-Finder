import React from 'react';
import PropTypes from 'prop-types'


const  Usersitem  = ({user : {avatar_url , login , html_url }}) => {
   
    

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="git hub" className="round-img " style= {{width: " 60px"}}/>
                
                <h3>{login}</h3>

                 <div> <a href={html_url} className="btn btn-dark btn-sm my-1">More</a></div>
              
            </div>
        )
    }

Usersitem.propType = {
    user: PropTypes.object.isRequired,
}
export default Usersitem
