// This file centralizes the definition of all available tools, organized by category.
export const categories = [
        {
        name: 'Popular Tools',
        tools: [
            { id: 'merge', name: 'Merge PDF', icon: 'combine', subtitle: 'Combine multiple PDFs into one file.' },
            { id: 'split', name: 'Split PDF', icon: 'scissors', subtitle: 'Extract a range of pages into a new PDF.' },
            { id: 'compress', name: 'Compress PDF', icon: 'zap', subtitle: 'Reduce the file size of your PDF.' },
            { id: 'edit', name: 'PDF Editor', icon: 'pocket-knife', subtitle: 'Annotate, highlight, redact, comment, add shapes/images, search, and view PDFs' },
            { id: 'jpg-to-pdf', name: 'JPG to PDF', icon: 'image-up', subtitle: 'Create a PDF from one or more JPG images.' },
            { id: 'sign-pdf', name: 'Sign PDF', icon: 'pen-tool', subtitle: 'Draw, type, or upload your signature.' },
            { id: 'cropper', name: 'Crop PDF', icon: 'crop', subtitle: 'Trim the margins of every page in your PDF.' },
            { id: 'extract-pages', name: 'Extract Pages', icon: 'ungroup', subtitle: 'Save a selection of pages as new files.' },
            { id: 'duplicate-organize', name: 'Duplicate & Organize', icon: 'files', subtitle: 'Duplicate, reorder, and delete pages.' },
            { id: 'delete-pages', name: 'Delete Pages', icon: 'trash-2', subtitle: 'Remove specific pages from your document.' },
        ]
    },
    {
        name: 'Edit & Annotate',
        tools: [
            { id: 'edit', name: 'PDF Editor', icon: 'pocket-knife', subtitle: 'Annotate, highlight, redact, comment, add shapes/images, search, and view PDFs.' },
            // { id: 'crop', name: 'Crop PDF', icon: 'crop', subtitle: 'Trim the margins of every page in your PDF.' },
            { id: 'add-page-numbers', name: 'Page Numbers', icon: 'list-ordered', subtitle: 'Insert page numbers into your document.' },
            { id: 'add-watermark', name: 'Add Watermark', icon: 'droplets', subtitle: 'Stamp text or an image over your PDF pages.' },
            { id: 'add-header-footer', name: 'Header & Footer', icon: 'pilcrow', subtitle: 'Add text to the top and bottom of pages.' },
            { id: 'invert-colors', name: 'Invert Colors', icon: 'contrast', subtitle: 'Create a "dark mode" version of your PDF.' },
            { id: 'change-background-color', name: 'Background Color', icon: 'palette', subtitle: 'Change the background color of your PDF.' },
            { id: 'change-text-color', name: 'Change Text Color', icon: 'type', subtitle: 'Change the color of text in your PDF.' },
            { id: 'sign-pdf', name: 'Sign PDF', icon: 'pen-tool', subtitle: 'Draw, type, or upload your signature.' },
            { id: 'remove-annotations', name: 'Remove Annotations', icon: 'eraser', subtitle: 'Strip comments, highlights, and links.' },
            { id: 'cropper', name: 'Crop PDF', icon: 'crop', subtitle: 'Trim the margins of every page in your PDF.' },
            { id: 'form-filler', name: 'PDF Form Filler', icon: 'square-pen', subtitle: 'Fill in forms directly in the browser.' },
            { id: 'remove-blank-pages', name: 'Remove Blank Pages', icon: 'file-minus-2', subtitle: 'Automatically detect and delete blank pages.' },
        ]
    },
    {
        name: 'Convert to PDF',
        tools: [
            { id: 'image-to-pdf', name: 'Image to PDF', icon: 'images', subtitle: 'Combine various images into one PDF.' },
            { id: 'jpg-to-pdf', name: 'JPG to PDF', icon: 'image-up', subtitle: 'Create a PDF from one or more JPG images.' },
            { id: 'png-to-pdf', name: 'PNG to PDF', icon: 'image-up', subtitle: 'Create a PDF from one or more PNG images.' },
            { id: 'webp-to-pdf', name: 'WebP to PDF', icon: 'image-up', subtitle: 'Create a PDF from one or more WebP images.' },
            { id: 'svg-to-pdf', name: 'SVG to PDF', icon: 'pen-tool', subtitle: 'Create a PDF from one or more SVG images.' },
            { id: 'bmp-to-pdf', name: 'BMP to PDF', icon: 'image', subtitle: 'Create a PDF from one or more BMP images.' },
            { id: 'heic-to-pdf', name: 'HEIC to PDF', icon: 'smartphone', subtitle: 'Create a PDF from one or more HEIC images.' },
            { id: 'tiff-to-pdf', name: 'TIFF to PDF', icon: 'layers', subtitle: 'Create a PDF from one or more TIFF images.' },
            { id: 'txt-to-pdf', name: 'Text to PDF', icon: 'file-pen', subtitle: 'Convert a plain text file into a PDF.' },
            // { id: 'md-to-pdf', name: 'Markdown to PDF', icon: 'file-text', subtitle: 'Convert a Markdown file into a PDF.' },
            // { id: 'scan-to-pdf', name: 'Scan to PDF', icon: 'camera', subtitle: 'Use your camera to create a scanned PDF.' },
            // { id: 'word-to-pdf', name: 'Word to PDF', icon: 'file-text', subtitle: 'Convert .docx documents to PDF.' },
        ]
    },
    {
        name: 'Convert from PDF',
        tools: [
            { id: 'pdf-to-jpg', name: 'PDF to JPG', icon: 'file-image', subtitle: 'Convert each PDF page into a JPG image.' },
            { id: 'pdf-to-png', name: 'PDF to PNG', icon: 'file-image', subtitle: 'Convert each PDF page into a PNG image.' },
            { id: 'pdf-to-webp', name: 'PDF to WebP', icon: 'file-image', subtitle: 'Convert each PDF page into a WebP image.' },
            { id: 'pdf-to-bmp', name: 'PDF to BMP', icon: 'file-image', subtitle: 'Convert each PDF page into a BMP image.' },
            { id: 'pdf-to-tiff', name: 'PDF to TIFF', icon: 'file-image', subtitle: 'Convert each PDF page into a TIFF image.' },
            { id: 'pdf-to-greyscale', name: 'PDF to Greyscale', icon: 'palette', subtitle: 'Convert all colors to black and white.' },
            // { id: 'pdf-to-markdown', name: 'PDF to Markdown', icon: 'file-pen', subtitle: 'Extract text into a Markdown file.' },
        ]
    },
    {
        name: 'Organize & Manage',
        tools: [
            { id: 'ocr-pdf', name: 'OCR PDF', icon: 'scan-text', subtitle: 'Make a PDF searchable and copyable.' },
            { id: 'merge', name: 'Merge PDF', icon: 'combine', subtitle: 'Combine multiple PDFs into one file.' },
            { id: 'alternate-merge', name: 'Alternate & Mix Pages', icon: 'shuffle', subtitle: 'Combine PDFs by alternating pages from each.' },
            { id: 'organize', name: 'Organize PDF', icon: 'grip', subtitle: 'Reorder pages by dragging and dropping.' },
            { id: 'duplicate-organize', name: 'Duplicate & Organize', icon: 'files', subtitle: 'Duplicate, reorder, and delete pages.' },
            { id: 'split', name: 'Split PDF', icon: 'scissors', subtitle: 'Extract a range of pages into a new PDF.' },
            { id: 'split-in-half', name: 'Divide Pages', icon: 'table-columns-split', subtitle: 'Divide pages horizontally or vertically.' },
            { id: 'extract-pages', name: 'Extract Pages', icon: 'ungroup', subtitle: 'Save a selection of pages as new files.' },
            { id: 'delete-pages', name: 'Delete Pages', icon: 'trash-2', subtitle: 'Remove specific pages from your document.' },
            { id: 'add-blank-page', name: 'Add Blank Page', icon: 'file-plus-2', subtitle: 'Insert an empty page anywhere in your PDF.' },
            { id: 'reverse-pages', name: 'Reverse Pages', icon: 'arrow-down-z-a', subtitle: 'Flip the order of all pages in your document.' },
            { id: 'rotate', name: 'Rotate PDF', icon: 'rotate-cw', subtitle: 'Turn pages in 90-degree increments.' },
            { id: 'n-up', name: 'N-Up PDF', icon: 'layout-grid', subtitle: 'Arrange multiple pages onto a single sheet.' },
            { id: 'combine-single-page', name: 'Combine to Single Page', icon: 'unfold-vertical', subtitle: 'Stitch all pages into one continuous scroll.' },
            { id: 'view-metadata', name: 'View Metadata', icon: 'info', subtitle: 'Inspect the hidden properties of your PDF.' },
            { id: 'edit-metadata', name: 'Edit Metadata', icon: 'file-cog', subtitle: 'Change the author, title, and other properties.' },
            { id: 'pdf-to-zip', name: 'PDFs to ZIP', icon: 'stretch-horizontal', subtitle: 'Package multiple PDF files into a ZIP archive.' },
            { id: 'compare-pdfs', name: 'Compare PDFs', icon: 'git-compare', subtitle: 'Compare two PDFs side by side.' },
            { id: 'posterize', name: 'Posterize PDF', icon: 'layout-grid', subtitle: 'Split a large page into multiple smaller pages.' },
        ]
    },
    {
        name: 'Optimize & Repair',
        tools: [
            { id: 'compress', name: 'Compress PDF', icon: 'zap', subtitle: 'Reduce the file size of your PDF.' },
            { id: 'fix-dimensions', name: 'Fix Page Size', icon: 'ruler-dimension-line', subtitle: 'Standardize all pages to a uniform size.' },
            { id: 'page-dimensions', name: 'Page Dimensions', icon: 'ruler', subtitle: 'Analyze page size, orientation, and units.' },
        ]
    },
    {
        name: 'Secure PDF',
        tools: [
            { id: 'encrypt', name: 'Encrypt PDF', icon: 'lock', subtitle: 'Add a password to protect your PDF.' },
            { id: 'decrypt', name: 'Decrypt PDF', icon: 'unlock', subtitle: 'Remove password protection from a PDF.' },
            { id: 'flatten', name: 'Flatten PDF', icon: 'layers', subtitle: 'Make form fields and annotations non-editable.' },
            { id: 'remove-metadata', name: 'Remove Metadata', icon: 'file-x', subtitle: 'Strip hidden data from your PDF.' },
            { id: 'change-permissions', name: 'Change Permissions', icon: 'shield-check', subtitle: 'Set or change user permissions on a PDF.' },
        ]
    }, 
];