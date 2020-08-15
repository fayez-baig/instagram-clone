import React from "react";
import Comments from "../Comments/Comments";

const Post = ({ postId, displayName, url, comments, caption, timestamp }) => {
  return (
    <div className="w-600 mw-full" key={timestamp}>
      <div className="card p-0">
        <div className="card-title p-1">
          <div className="d-flex">
            <img
              src="https://images.unsplash.com/photo-1597126730335-eef292fa4f21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=60"
              className="img-fluid rounded-circle m-5 w-50 h-50"
              alt="rounded circle"
            />
            <h4 className="ml-5">{displayName}</h4>
          </div>
        </div>
        <img
          src={url}
          className="img-fluid"
          style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          alt=""
        />

        <div className="content m-15">
          <div className="content-title d-flex  align-items-center h-50">
            <h5>
              <strong>{displayName} </strong>
            </h5>

            <h6 className="ml-5">{caption}</h6>
          </div>
          <div>
            <i
              className="fa fa-heart-o text-danger mr-5"
              aria-hidden="true"
            ></i>

            <span className="ml-5">
              <i
                className="fa fa-comments-o text-primary mr-5"
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>
        <div>
          <span className="text-muted m-15">
            <i className="fa fa-clock-o mr-5" aria-hidden="true"></i> May 4th,
            2020
          </span>
        </div>
        <hr />
        <Comments comments={comments} postId={postId} />
      </div>
    </div>
  );
};

export default Post;