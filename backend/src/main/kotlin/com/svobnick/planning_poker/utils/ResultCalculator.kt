package com.svobnick.planning_poker.utils

import com.svobnick.planning_poker.model.Vote

object ResultCalculator {
    private val vote2index = mapOf(
        0.5f to 0,
        1f to 1, 2f to 2, 3f to 3,
        5f to 4, 8f to 5, 13f to 6,
        21f to 7, 34f to 8, 55f to 9
    )

    internal fun computeResult(votes: MutableMap<String, Vote>): Pair<Int, Float> {
        var votesSum = 0f
        var votesAmount = 0
        var average = 0f
        for (value in votes.values) {
            if (value.vote != null) {
                val indexedValue = vote2index[value.vote]
                votesSum += indexedValue!!
                votesAmount += 1
            }
        }
        if (votesAmount > 0) {
            average = votesSum.div(votesAmount)
            val cards = vote2index.keys.toList()
            for ((index, card) in cards.withIndex()) {
                if (average == card) {
                    break
                } else if (average < card) {
                    average = cards[index] // round to next closest bigger vote
                    break
                }
            }
        }
        return Pair(votesAmount, average)
    }
}