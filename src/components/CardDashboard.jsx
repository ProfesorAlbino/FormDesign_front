import React, { Component } from "react";
import { Database } from "lucide-react";

export class CardDashboard extends Component {
  render() {
    const { Data } = this.props;
    const {descrption} = this.props
    return (
      <>
        <div class="col-12 col-sm-6 col-xl-6">
          <div class="card stat-card">
            <div class="card-body d-flex justify-content-between align-items-center">
              <div >
                <h6 class="card-subtitle mb-1">{descrption}</h6>
                <h3 class="card-title mb-0">{Data}</h3>
              </div>
              <div class="stat-icon">
                <Database />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
