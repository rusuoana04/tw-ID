const compress = (a, b = true) => 
    {
    
    if (typeof a !== 'string' && !(a instanceof String)) 
    {
        throw new Error('InvalidType');
    }

    
    if (a.length === 0) 
    {
        return '';
    }

    
    if (b) 
    {
        let result = '';
        let count = 1;

        for (let i = 1; i <= a.length; i++) 
        {
            
            if (a[i] === a[i - 1]) 
            {
                count++;
            }
             else 
            {
                
                result += a[i - 1] + count;
                count = 1; 
            }
        }

        return result;
    } 
    else 
    
    {
       
        let result = '';
        let i = 0;

        while (i < a.length) 
        {
            const char = a[i];
            i++;
            let count = '';

            
            while (i < a.length && !isNaN(a[i]))
            {
                count += a[i];
                i++;
            }

            
            result += char.repeat(Number(count));
        }

        return result;
    }
};

module.exports = compress;

// console.log(compress('')); 
// console.log(compress('aaaabbbbbccdddd', true)); 
// console.log(compress('abcdd', true)); 