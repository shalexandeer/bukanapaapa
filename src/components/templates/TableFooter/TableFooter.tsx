import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/Button";
import { CardActions } from "../../elements/Card/Card";

interface TableFooterProps {
  page: number;
  totalPage: number;
  pageSize: number;
  path: string;
}

const TableFooter: React.FC<TableFooterProps> = ({
  page,
  totalPage,
  pageSize,
  path,
}) => {
  const navigate = useNavigate();

  const handlePreviousPage = () => {
    navigate(`/admin/${path}?page=${page - 1}&pageSize=${pageSize}`);
  };

  const handleNextPage = () => {
    navigate(`/admin/${path}?page=${page + 1}&pageSize=${pageSize}`);
  };

  return (
    <CardActions className="flex w-full justify-center">
      <div className="join">
        <Button
          disabled={page === 1}
          className="btn join-item"
          onClick={handlePreviousPage}
        >
          «
        </Button>
        <Button className="btn join-item">
          Page {page} of {totalPage}
        </Button>
        <Button
          className="btn join-item"
          onClick={handleNextPage}
          disabled={page === totalPage}
        >
          »
        </Button>
      </div>
    </CardActions>
  );
};

export default TableFooter;
