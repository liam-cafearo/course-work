from decimal import *

coins = [1, .50, .20, .10, .05, .02, .01]


def give_change(amount):
    change = []
    # Convert amount into a string, then a Decimal.
    amount = Decimal(str(amount))
    for coin in coins:
        # Convert coin into a string, then a Decimal.
        coin = Decimal(str(coin))
        while coin <= amount:
            amount -= coin
            # Turn each coin back into a float. As a decimal the coin list would look like this
            # [Decimal('0.1'), Decimal('0.05'), Decimal('0.02'), the tests would fail
            # due to floating point error.
            change.append(float(coin))
    return change
