import React, { Component } from 'react';

export default class ListRoomComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
       this.props.load_data();
    }
    render() {
        const { listRoom } = this.props;
        const row_data = listRoom.map((values,index)=>{
            return(
                <tr key={index}>
                    <td className="center">{index}</td>
                    <td>{values.NAME_ROOM}</td>
                    <td>{values.PRICE}</td>
                    <td>{values.NUMBER_ELECTRIC}</td>
                    <td>{values.NUMBER_WATER}</td>

                    <td>
                        <span className={'label label-sm'+(values.STATUS ==1?'label-success arrowed arrowed-righ' :' label-warning arrowed-in')}>{values.STATUS ===1?"Đã thuê":"Phòng Trống"}</span>
                    </td>
                    <td>
                        <div className="hidden-sm hidden-xs btn-group">
                            <button className="btn btn-xs btn-success">
                                <a><i className="ace-icon fa fa-eye bigger-120"></i></a>
                            </button>

                            <button className="btn btn-xs btn-info" >
                            <a><i className="ace-icon fa fa-pencil bigger-120"></i></a>
                            </button>

                            <button className="btn btn-xs btn-danger">
                                <a>
                                    <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                </a>
                            </button>
                        </div>

                        <div className="hidden-md hidden-lg">
                            <div className="inline pos-rel">
                                <button className="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                    <i className="ace-icon fa fa-cog icon-only bigger-110"></i>
                                </button>

                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                    <li>
                                        <a className="tooltip-info" data-rel="tooltip" title="" data-original-title="View">
                                            <span className="blue">
                                                <i className="ace-icon fa fa-eye bigger-120"></i>
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="tooltip-success" data-rel="tooltip" title="" data-original-title="Edit">
                                            <span className="green">
                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="tooltip-error" data-rel="tooltip" title="" data-original-title="Delete">
                                            <span className="red">
                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        });
    return (
        <div className="row">
            <h1 className="header smaller lighter blue">DANH SÁCH PHÒNG TRỌ</h1>

            <div className="clearfix">
                <div className="pull-right tableTools-container"></div>
            </div>
            <div className="table-header">
                DANH SÁCH PHÒNG
                <div style={{float: 'right', margin: '0% 2% 0 0',}}>
                    <a>
                        <button className="btn btn-sm btn-success"> THÊM </button>
                    </a>
                </div>
            </div>
            <div className="table-responsive">
                <table id="dynamic-table" className="table table-striped table-bordered table-hover responsive">
                    <thead>
                        <tr>
                            <th className="center">
                                STT
                            </th>
                            <th>Room Name</th>
                            <th>Price</th>
                            <th>Number Electric</th>
                            <th>Number Water</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {row_data}
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}
