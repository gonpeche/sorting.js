describe('Split Array function', function() {
    it('es capar de dividir el arreglo en dos partes', function() {
        let arr = [1,2,3,4,5]
      expect(split(arr)).toEqual([ [1,2,3] , [4,5] ])
    });
});