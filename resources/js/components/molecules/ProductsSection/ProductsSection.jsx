import React from "react";
import './ProductsSection.scss'


//imports paginator
import { classNames } from 'primereact/utils';

//paginator images
import leftArrow from '../../../img/icons/leftArrow.svg'
import { DataView } from "primereact/dataview";
//paginator template
const paginator =
{
    layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
    'PrevPageLink': (options) => {
        return (
            <button type="button" className={"buton-paginator"} onClick={options.onClick} disabled={options.disabled}>
                <img className="paginator left " src={leftArrow} />
                {/* <Ripple /> */}
            </button>
        )
    },
    'NextPageLink': (options) => {
        return (
            <button type="button" style={{ cursor: "pointer!important" }} className={`buton-paginator`} onClick={options.onClick} disabled={options.disabled}>
                <img style={{ transform: 'scaleX(-1)' }} className="paginator right" src={leftArrow} />
                {/* <Ripple /> */}
            </button>
        )
    },
    'PageLinks': (options) => {
        if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
            const className = classNames(options.className, { 'p-disabled': true });

            return <span className={className} style={{ userSelect: 'none' }}>...</span>;
        }

        return (
            <button type="button" className={`buton-paginator-number ${options.className}`} onClick={options.onClick}>
                {options.page + 1}
                {/* <Ripple /> */}
            </button>
        )
    }
}

const ProductsSection = ({ cardTemplate, data ,title}) => {
    return (
        <>
            <div className="ProductsSection">
                <div className="title-container">
                    <div className="title">{title}</div>
                </div>
                <DataView
                    itemTemplate={cardTemplate}
                    value={data}
                    paginator
                    rows={8}
                    layout={"grid"}
                    paginatorTemplate={paginator}
                ></DataView>
            </div>
        </>
    )
}
export default ProductsSection