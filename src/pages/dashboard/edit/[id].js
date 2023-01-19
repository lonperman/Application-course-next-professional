import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FormProduct from '@components/FormProduct';
import axios from 'axios';
import endPoints from '@services/api';
import Alert from '@common/Alert';
import useAlert from '@hooks/useAlert';

export default function Edit() {
  const router = useRouter();
  const [product, setProduct] = useState({});
  const [open, setOpen] = useState(false);
  const { alert, setAlert, toggleAlert } = useAlert();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      return response;
    }
    getProduct()
      .then((response) => setProduct(response.data))
      .catch(() => {
        setAlert({
          active: true,
          message: 'ID NOT FOUND..!!',
          type: 'error',
          autoClose: false,
        });
      });
  }, [router?.isReady]);

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <FormProduct setOpen={setOpen} setAlert={setAlert} product={product} />
    </>
  );
}
