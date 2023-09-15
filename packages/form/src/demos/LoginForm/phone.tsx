import { FXoginForm } from '@fx/components';
import React from 'react';

export default () => {
  const handleSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <FXoginForm
      loginType="phone"
      logo="https://static.dongdonglinli.com/ui/mini-groupdd/icon/common_img_tddlogo_roundness.png"
      title="咚咚邻里"
      bgColor="f0f2f5"
      count={30}
      onSubmit={handleSubmit}
    />
  );
};
