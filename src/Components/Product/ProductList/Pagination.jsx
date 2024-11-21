// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center space-x-2 mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50"
            >
                {'<'}
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        page === currentPage
                            ? 'bg-brown-700 text-white'
                            : 'border border-gray-400 hover:bg-gray-200'
                    }`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50"
            >
                {'>'}
            </button>
        </div>
    );
};

export default Pagination;
