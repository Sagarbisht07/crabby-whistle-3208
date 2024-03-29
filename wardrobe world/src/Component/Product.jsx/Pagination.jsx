import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ total,page,setLimit,setPage}) => {
  return (
    <ButtonGroup>
      <Button
        isDisabled={page === 1}
        data-cy="pagination-first-button"
        onClick={() => setPage(1)}
      >
        First
      </Button>
      <Button
        isDisabled={page === 1}
        data-cy="pagination-previous-button"
        onClick={() => setPage(page - 1)}
      >
        <ArrowLeftIcon />
      </Button>
      <Select
        data-cy="pagination-limit-select"
        onChange={(e) => setLimit(e.target.value)}
      >
        <option data-cy="pagination-limit-3">Set Limit</option>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
        <option data-cy="pagination-limit-9">12</option>
        <option data-cy="pagination-limit-9">15</option>
        <option data-cy="pagination-limit-9">18</option>
      </Select>
      <Button
        isDisabled={page === total}
        data-cy="pagination-next-button"
        onClick={() => setPage(page + 1)}
      >
        <ArrowRightIcon />
      </Button>
      <Button
        isDisabled={page === total}
        data-cy="pagination-last-button"
        onClick={() => setPage(total)}
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
