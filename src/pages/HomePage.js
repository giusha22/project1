import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { instance, isUserAdmin } from '../application'
import { HomePageProducts } from '../components/product';
import { setSelectedProduct, useUserInfo } from '../redux';

export const HomePage = () => {

  return (
   <HomePageProducts/>
  )
}
