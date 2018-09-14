describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual([]);
    });
});

describe('Swap', function(){

    it('intercambia valores', function(){
      expect( swap([4,3,8,1],0) ).toEqual([3,4,8,1]);
    });

    it('cuenta bien', function(){
        spyOn(window, 'swap').and.callThrough();
        swap([4,5])
        expect(swap.calls.count()).toEqual(1);
    });

});

