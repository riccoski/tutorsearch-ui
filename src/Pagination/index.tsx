import * as React from "react";
import classNames from "classnames";
import styles from "./Pagination.module.scss";

const Pagination: React.FC<{
  currentPage: number;
  onPageChange?: Function;
  showNumbers?: boolean;
  totalPages: number;
}> = ({ currentPage, onPageChange, showNumbers, totalPages }) => {
  const [page, setPage] = React.useState(currentPage);

  const handlePageChange = (pageNumber: number) => () => {
    setPage(pageNumber);
    if (onPageChange) onPageChange(pageNumber);
  };

  const pages = [new Array(totalPages).keys()].map((_, index) => index + 1);

  return (
    <div className={styles.pagination}>
      <ul>
        <li className={styles.prevPage}>
          <button disabled={page === 1} onClick={handlePageChange(page - 1)}>
            Prev
          </button>
        </li>
        {showNumbers && (
          <li>
            <ul>
              {pages.map(page => (
                <li key={`pageItem_${page}`}>
                  <button
                    className={classNames({
                      [styles.active]: currentPage === page
                    })}
                    onClick={handlePageChange(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        )}
        <li className={styles.nextPage}>
          <button
            disabled={currentPage === totalPages}
            onClick={handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 0
};

Pagination.displayName = "Pagination";

export default Pagination;
