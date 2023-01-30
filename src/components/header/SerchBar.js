import { Autocomplete, Box, TextField, renderInput } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {  fetchQueryProducts, setSearchResults, useSearchResult } from '../../redux';
import { Typography } from '../shared';
const SerchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const searchResult = useSearchResult();
  console.log("searchResult", searchResult);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("searchValue", searchValue);
      if (searchValue) {
        //რექვესთის გაგზავნა 
        dispatch(fetchQueryProducts(searchValue));
      }else {
        dispatch(setSearchResults());
      }
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchValue]);

  return (
    <Autocomplete
       sx={{ width : 300 }}
      freeSolo
      disableClearable
      getOptionLabel={(option) => option.name}
      options={searchResult}
      renderOption={(_, option) => {
        const { name, category, _id, price} = option;
        return (
          <Link
            to={`/products/categories/${category}/${name}`}
            key={_id}
            state={{ id: _id }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography>{name}</Typography>
              <Typography>{price}</Typography>
            </Box>
          </Link>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            label="Search Product"
            InputProps={{
              ...params.InputProps,
              Type: "search",
            }}
          />
        );
      }}
    />
  );
    
}

export default SerchBar






// import { Autocomplete, Box, TextField } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { useSerchResult } from '../../redux';
// import { fetchQuertProducts, setSearchResults } from '../../redux/silices/ProductSlice';
// import { Typography } from '../shared';

// const SerchBar = () => {
//   const dispatch = useDispatch()
//   const [searchValue,setSearchValue] = useState("");
//   const searchResult = useSerchResult();
//   console.log("searchResult",searchResult);
//   useEffect(()=>{
//     const timerId = setTimeout(() => {
//       console.log("searchValue", searchValue);
//       if (searchValue) {
//         //request-ს ვაგზავნით
//         dispatch(fetchQuertProducts(searchValue));
//       } else {
//         dispatch(setSearchResults());
//       }
//     }, 1000);
//     return ()=>{
//       console.log("shemodis line 14");
//       clearTimeout(timerId)
//     };
//   },[searchValue])
//   const options = [];
//   return (
//     <Autocomplete
//     freeSolo
      // sx={{ width : 300 }}
//       disableClearable 
//       options={options}
//       getOptionLabel={(option)=>option.name}
//       renderOption = {(_,option)=> {
//         console.log("option",option);
        // return (
        //   <Link to="/" key={option._id} state={{}}>
        //     <Box sx={{ display:"flex" }}>
        //       <Typography>{option.name}</Typography>
        //       <Typography>{option.price}</Typography>

        //     </Box>
        //   </Link>
        // )
//       }}
      // renderInput={(params)=>{
      //   return (
      //     <TextField {...params}
      //      value={searchValue} 
      //     onChange={(e)=>setSearchValue(e.target.value)}
      //     label="search product"
      //     InputProps={{
      //       ...params.InputProps,
      //       type: "search",
      //     }}
      //     />
      //   )
      // }}
//       />
//   )



  
//     // <Autocomplete 
//     // freeSolo
//     // sx={{ width : 300 }}
//     // disableClearable 
//     // options={options}
//     // renderOption={(_,option)=>{}
//     //   console.log("option",option); 
//     //   return <Link to="/" key={option._id} state={{}}>
//     //     <Box sx={{display:"flex"}}>

//     //     </Box>
//     //   </Link> 
//     // }}
//     // />
  
// }

// export default SerchBar