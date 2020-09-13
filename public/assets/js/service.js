$(document).ready(function(){
	var i=1;  
	
	
	$('#tab_logic tbody').on('keyup change',function(){
		calc();
	}); 

	/*  $('#add').on('click', function(){ 
		$('#add').prop("disabled",true); 
		$('#del').prop("disabled",false); 
	});  */
	
});

 



function calc()
{
	var qty =	$('#tab_logic tbody tr:last').find('.qty').val();
	var price = $('#tab_logic tbody tr:last').find('.price').val();
	$('#tab_logic tbody tr:last').find('.total').val(qty*price);	
	$('#add').prop("disabled",false); 		
	calc_total();  		
			  
}

function calc_total()
{
	total=0;
	$('.total').each(function() {
        total += parseInt($(this).val());
    });
	$('#sub_total').val(total.toFixed(2));
	tax_sum=total/100*15
	$('#tax_amount').val(tax_sum.toFixed(2));
	$('#total_amount').val((tax_sum+total).toFixed(2));
} 



