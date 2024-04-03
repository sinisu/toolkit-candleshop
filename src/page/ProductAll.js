import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';
import { getProducts } from '../redux/reducers/productSlice';

const ProductAll = () => {
  const productList = useSelector((state)=>state.product.productList)
  const [resultList,setResultList] = useState([]);
  const [query,setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getCategory = (categoryId ) => {
    let categoryItem = [];
    productList.map((item)=>{
      if(item.category===categoryId) {
        categoryItem.push(productList[item.id])
      }
    });
    setResultList(categoryItem)
  }

  const getProduct = () => {
    let searchQuery = query.get("q") || "";
    dispatch(getProducts(searchQuery));
  }

  useEffect(()=>{
    getProduct();
  },[query])

  useEffect(()=>{
    let categoryId = query.get("category") || "";
    if (categoryId==="") {
      setResultList(productList)
    } else {
      getCategory(categoryId)
    }
    
  },[productList])

  return (
    <div>
      <Row>
        {resultList.map(item=>
          (<Col lg={3}>
            <ProductCard item={item} />
          </Col>))}
      </Row>
    </div>
  )
}

export default ProductAll
