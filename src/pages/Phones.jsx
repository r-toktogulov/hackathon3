import { Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../context/ClientContext";

const Phones = () => {
  const data = useContext(clientContext);
  const { phones, getPhones } = data;
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = currentPage * productsPerPage - productsPerPage;
  const phone = phones.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalCount = phones.length;
  const totalPages = Math.ceil(totalCount / productsPerPage);

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <Container>
      <div className="products-list">
        {phone.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <div className="my-pagination">
        <Pagination
          onChange={(_, page) => handlePagination(page)}
          count={totalPages}
          color="primary"
          // size="small"
        />
      </div>
    </Container>
  );
};

export default Phones;
