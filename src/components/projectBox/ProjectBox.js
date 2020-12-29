import React from 'react';

const ProjectBox = (props) => {
    return ( 
        <div className={"col-lg-4 work_item " + props.tags}>
            <a href={props.url} className="img-zoom" target="_blank" rel="noreferrer">
                <div className="work_box">
                    <div className="work_img">
                        <img src={props.image} className="img-fluid mx-auto d-block rounded" alt="work-img"/>
                    </div>
                    <div className="work_detail">
                        <p className="mb-2">{props.category}</p>
                        <h4 className="mb-2">{props.title}</h4>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}
 
export default ProjectBox;