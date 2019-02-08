import React from 'react';

import NavTabs from './components/NavTabs';
import GenerateBillBtn from './components/GenerateBillBtn';
import NumberInput from './components/Keypad/NumberInput';
import Keypad from './components/Keypad';
import RecentPayments from './components/RecentPayments';

export default function() {
  const { activeTab, totalAmount } = this.state;

  return (
    <section className="section">
      <div className="container is-fluid">
        <NavTabs
          activeTab={activeTab}
          onChange={tab => this.setState({ activeTab: tab })}
        />
        {activeTab === 'numberPad' && (
          <React.Fragment>
            <NumberInput value={parseFloat(totalAmount)} />
            <Keypad handleChange={val => this.setState({ totalAmount: val })} />
            <GenerateBillBtn handlePay={this.handlePay} />
          </React.Fragment>
        )}
        {activeTab === 'recentPayments' && <RecentPayments />}
      </div>
    </section>
  );
}
