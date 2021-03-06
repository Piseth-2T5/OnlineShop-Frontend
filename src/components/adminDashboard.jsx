import React, { Component } from "react";
import "../style/adminDashBoard.css";
class AddminDashboard extends React.Component {
	state = {
		isProductClicked: false,
		isCostumerClicked: false,
		isTransactionClicked: false,
	};

	clickProduct = () => {
		this.setState({ isProductClicked: !this.state.isProductClicked });
	};
	clickCostumer = () => {
		this.setState({ isCostumerClicked: !this.state.isCostumerClicked });
	};
	clickTransacton = () => {
		this.setState({ isTransactionClicked: !this.state.isTransactionClicked });
	};
	render() {
		return (
			<React.Fragment>
				<h4 className="p-2 dashboard pl-4 m-0">Inventory Management System</h4>
				<div className="row">
					<div className="col-2 p-0 bg-light " style={{ height: 700 }}>
						<h4 className="dashboard m-0 text-center">FEATURES</h4>
						<nav className="nav flex-column pl-4 sidebar">
							<a onClick={this.clickProduct} className={this.changeProductColor()} data-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
								Products
								<span className="sign-location">{this.changeProductSign()}</span>
							</a>
							<div className="collapse" id="collapse">
								<nav className="nav flex-column">
									<a className="nav-link active" href="#">
										<i className="fas fa-list-alt"></i>
										List Product
									</a>
									<a className="nav-link" href="#">
										<i className="fas fa-plus-circle"></i>
										Add Product
									</a>
									<a className="nav-link" href="#">
										<i className="fas fa-store"></i>
										Stoke Count
									</a>
								</nav>
							</div>
						</nav>
						<nav className="nav flex-column pl-4 sidebar">
							<a onClick={this.clickTransacton} className={this.changeTransactionColor()} data-toggle="collapse" href="#collapseTransaction" role="button" aria-expanded="false" aria-controls="collapseExample">
								Transactions
								<span className="sign-location">{this.changeTransactionSign()}</span>
							</a>
							<div className="collapse" id="collapseTransaction">
								<nav className="nav flex-column">
									<a className="nav-link active" href="#">
										<i className="fas fa-hand-holding-usd"></i>
										Sales
									</a>
									<a className="nav-link" href="#">
										<i className="fas fa-pause-circle"></i>
										Orders
									</a>
									<a className="nav-link" href="#">
										<i className="fas fa-shopping-cart"></i>
										Purchases
									</a>
								</nav>
							</div>
						</nav>
						<nav className="nav flex-column pl-4 sidebar">
							<a onClick={this.clickCostumer} className={this.changeCostumerColor()} data-toggle="collapse" href="#collapseCostumer" role="button" aria-expanded="false" aria-controls="collapseExample">
								Costumers
								<span className="float-right">{this.changeCostumerSign()}</span>
							</a>
							<div className="collapse" id="collapseCostumer">
								<nav className="nav flex-column">
									<a className="nav-link active" href="#">
										<i className="fas fa-list-alt"></i>
										List Costumers
									</a>
									<a className="nav-link" href="#">
										<i className="fas fa-plus-circle"></i>
										Add Costumers
									</a>
								</nav>
							</div>
						</nav>
					</div>
					<div className="col-10 m-0 p-0">
						<table className="table table-striped table-bordered">
							<thead className="thead-dark">
								<tr>
									<th scope="col">#</th>
									<th scope="col">First</th>
									<th scope="col">Last</th>
									<th scope="col">Handle</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</React.Fragment>
		);
	}
	changeProductColor() {
		const { isProductClicked } = this.state;
		return isProductClicked ? "nav-link text-success" : "nav-link";
	}
	changeCostumerColor() {
		const { isCostumerClicked } = this.state;
		return isCostumerClicked ? "nav-link text-success" : "nav-link";
	}
	changeTransactionColor() {
		const { isTransactionClicked } = this.state;
		return isTransactionClicked ? "nav-link text-success" : "nav-link";
	}
	changeProductSign() {
		const rightArrow = (
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
				<path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
			</svg>
		);

		const downArrow = (
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
				<path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
			</svg>
		);
		return this.state.isProductClicked ? downArrow : rightArrow;
	}
	changeCostumerSign() {
		const rightArrow = (
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
				<path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
			</svg>
		);

		const downArrow = (
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
				<path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
			</svg>
		);
		return this.state.isCostumerClicked ? downArrow : rightArrow;
	}
	changeTransactionSign() {
		const rightArrow = (
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
				<path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
			</svg>
		);

		const downArrow = (
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
				<path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
			</svg>
		);
		return this.state.isTransactionClicked ? downArrow : rightArrow;
	}
}

export default AddminDashboard;
