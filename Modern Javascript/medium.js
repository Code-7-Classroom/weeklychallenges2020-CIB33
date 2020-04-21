const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

arrAvg([1, 4, 7]);
arrAvg([10, 5]);
arrAvg([1.5, 3, 2.5, 1] )