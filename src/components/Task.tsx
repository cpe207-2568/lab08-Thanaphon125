import type { TaskCardProps } from "../libs/type";


export default function TaskCard({ title, description, isDone }: TaskCardProps) {
  const status = isDone ? "line-through" : "";

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
            <h5 className="card-title" style={{ textDecoration: status }}>{title}</h5>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
            <p className="card-text mb-0">{description}</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
            <button className="btn btn-success me-2">Done</button>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
