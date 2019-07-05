import React, { PureComponent, Fragment } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import {FormComponentProps} from 'antd/lib/form/Form';
// import { GlobalFooter } from 'ant-design-pro'
// import { Trans, withI18n } from '@lingui/react'
// import { setLocale } from 'utils'
// import config from 'utils/config'

// import styles from './index.less'
const styles = require('./index.less')
const FormItem = Form.Item

// @withI18n()
// @connect(({ loading }) => ({ loading }))
// @Form.create()
class Login extends PureComponent<CreateNoticeModalProps, any> {
  handleOk = () => {
    const { form } = this.props
    const { validateFieldsAndScroll } = form;
    validateFieldsAndScroll((errors:any, values:any) => {
        console.log(values)
      if (errors) {
        return
      }
      // dispatch({ type: 'login/login', payload: values })
    })
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form

    // let footerLinks = [
    //   {
    //     key: 'github',
    //     title: <Icon type="github" />,
    //     href: 'https://github.com/zuiidea/antd-admin',
    //     blankTarget: true,
    //   },
    // ]

    // if (config.i18n) {
    //   footerLinks = footerLinks.concat(
    //     config.i18n.languages.map(item => ({
    //       key: item.key,
    //       title: (
    //         <span onClick={setLocale.bind(null, item.key)}>{item.title}</span>
    //       ),
    //     }))
    //   )
    // }

    return (
      <Fragment>
        <div className={styles.form}>
          <div className={styles.logo}>
            {/*<img alt="logo" src={config.logoPath} />*/}
            <span>{`config.siteName`}</span>
          </div>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input
                  onPressEnter={this.handleOk}
                  placeholder={`Username`}
                />
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input
                  type="password"
                  onPressEnter={this.handleOk}
                  placeholder={`Password`}
                />
              )}
            </FormItem>
            <Row>
              <Button
                type="primary"
                onClick={this.handleOk}
                loading={false}
              >
                <span>Sign in</span>
              </Button>
              <p>
                <span>
                  <span>Username</span>
                  ：guest
                </span>
                <span>
                  <span>Password</span>
                  ：guest
                </span>
              </p>
            </Row>
          </form>
        </div>
        {/*<div className={styles.footer}>
          <GlobalFooter links={footerLinks} copyright={config.copyright} />
        </div>*/}
      </Fragment>
    )
  }
}

// Login.propTypes = {
//   form: PropTypes.object,
//   dispatch: PropTypes.func,
//   loading: PropTypes.object,
// }
interface CreateNoticeModalProps extends FormComponentProps {
  isShow: boolean
  onCancel: any
  onOk: any
}
export default Form.create<CreateNoticeModalProps>({})(Login)
