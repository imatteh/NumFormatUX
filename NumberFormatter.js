/**
 * NumberFormatter - Plugin لتنسيق الأرقام داخل حقول الإدخال
 * الاستخدام:
 * NumberFormatter.init('.number-input');
 */
var NumberFormatter = (function () {
    function formatNumber(value) {
        value = value.replace(/,/g, '');
        if (value === '' || isNaN(value)) return '';
        let parts = value.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }

    function formatDecimal(value, decimals = 3) {
        value = value.replace(/,/g, '');
        if (value === '' || isNaN(value)) return '';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }).format(parseFloat(value));
    }

    function unformat(value) {
        return parseFloat(value.replace(/,/g, ''));
    }

    function bindEvents(input, decimals) {
        // عند الكتابة
        input.addEventListener('input', function () {
            let cursorPos = this.selectionStart;
            let originalLength = this.value.length;

            this.value = formatNumber(this.value);

            let newLength = this.value.length;
            let posDiff = newLength - originalLength;
            this.setSelectionRange(cursorPos + posDiff, cursorPos + posDiff);
        });

        // عند الخروج من الحقل
        input.addEventListener('blur', function () {
            this.value = formatDecimal(this.value, decimals);
        });

        // عند التركيز في الحقل
        input.addEventListener('focus', function () {
            this.value = this.value.replace(/,/g, '');
        });

        // تنسيق أولي
        input.value = formatNumber(input.value);
    }

    return {
        /**
         * بدء التهيئة
         * @param {string} selector - محدد CSS لتحديد الحقول
         * @param {number} decimals - عدد الخانات العشرية
         */
        init: function (selector = '.number-input', decimals = 3) {
            const inputs = document.querySelectorAll(selector);
            inputs.forEach(input => bindEvents(input, decimals));
        },

        /**
         * إزالة التنسيق من القيمة
         * @param {string} value
         * @returns {number}
         */
        unformat: function (value) {
            return unformat(value);
        }
    };
})();
