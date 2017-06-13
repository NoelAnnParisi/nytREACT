import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
const FormItem = Form.Item;

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal'
    };
  }
  handleFormLayoutChange(e){
    this.setState({ formLayout: e.target.value });
  }
  render() {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;
    return (
      <div>
        <Form layout={formLayout}>
          <FormItem
            label="Form Layout"
            {...formItemLayout}
          >
          </FormItem>
          <FormItem
            label="Field A"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem
            label="Field B"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem
            label="Field C"
            {...formItemLayout}
          >
          <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem {...buttonItemLayout}>
          <Button type="primary" size="large">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}