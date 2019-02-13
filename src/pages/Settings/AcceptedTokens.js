/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */

import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import SettingsHeader from './components/SettingsHeader';
import Breadcrumb from './components/Breadcrumb';
import '../../../node_modules/bulma-extensions/bulma-switch/dist/css/bulma-switch.min.css';

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const networksList = [
  { id: 1, name: 'Ether', image: 'crypto-icon.png' },
  { id: 2, name: 'DAI', image: 'crypto-icon.png' },
  { id: 3, name: 'xDAI', image: 'crypto-icon.png' },
  { id: 4, name: 'WBTC (comming soon)', image: 'crypto-icon.png' }
];

const AcceptedTokens = props => {
  const { history } = props;

  return (
    <Layout header={{ isVisible: false }}>
      <Seo title="Accepted Tokens" />
      <div className="section">
        <div className="container">
          <SettingsHeader history={history} />
          <Breadcrumb
            history={history}
            title="Accepted Tokens"
            icon="token-icon.png"
          />
          {networksList.map(item => (
            <ItemContainer key={item.id}>
              <img
                src={require(`../../assets/dummy/${item.image}`)}
                alt={item.name}
              />
              <span>{item.name}</span>
              <div className="field">
                <input
                  id={`switchRoundedDefault-${item.id}`}
                  type="checkbox"
                  name={`switchRoundedDefault-${item.id}`}
                  className="switch is-rounded"
                  checked="checked"
                />
                <label htmlFor="switchRoundedOutlinedDefault" />
              </div>
            </ItemContainer>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AcceptedTokens;
