import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fecthPrice} from './../action';

class ModalComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			electric: this.props.Price.PRICE_ELECTRIC,
			warter	: this.props.Price.PRICE_WATER
		}
	}
	
	componentWillMount() {
		this.props.load_data();
		console.log(this.props);
		// this.setState({
		// 	electric: props.Price.PRICE_ELECTRIC,
		// 	warter	: props.Price.PRICE_WATER
		// });
		// return true;
	}
	
	handleChange = (event) =>{
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name] : value
		});
	}

    render() {
        return (
            <div id="my-modal" className="modal fade">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<h3 className="smaller lighter blue no-margin">Giá Điện Nước</h3>
						</div>

						<div className="modal-body">
							<div style={{marginBottom:'2%'}}>
								<input type="hidden" id="id-electric-water" />
								<label className="col-sm-3 control-label no-padding-right">Giá Điện</label>
								<span className="input-icon">
                                    <input type="number" name = "electric" style={{textAlign:'end'}} 
									value = {this.state.electric}
									onChange = {this.handleChange}
									 />
									<i className="ace-icon fa fa-leaf green"></i>
								</span>
							</div>
							<div>
								<label className="col-sm-3 control-label no-padding-right">Giá Nước</label>
								<span className="input-icon ">
									<input type="number" name="warter" style={{textAlign:'end'}}  
									value = {this.state.warter}
									onChange = {this.handleChange}
									/>
									<i className="ace-icon fa fa-leaf blue"></i>
								</span>
							</div>
						</div>

						<div className="modal-footer">
							<button className="btn btn-sm btn-danger pull-right" data-dismiss="modal">
								<i className="ace-icon fa fa-times"></i>
								Đóng
							</button>
							<button className="btn btn-sm btn-info pull-right" style={{marginRight:'2%'}}>
								<i className="ace-icon fa fa-floppy-o"></i>
								Lưu
							</button>
						</div>
					</div>
				</div>
			</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Price : state.room.Price
    }
};
const mapDispatchToProps = dispatch => (   
    {
        load_data: () =>{dispatch(fecthPrice());
            // return getPrice().then(respones => {
            //     if (! respones.data.error) {
			// 		dispatch(fecthPrice(respones.data.data));
            //     }else {
            //          console.log(respones.data.message);
            //     }
            // }).catch( error => {
            //     console.log(error);
            // });
        }
    }
);
export default connect(mapStateToProps,mapDispatchToProps)(ModalComponent);
